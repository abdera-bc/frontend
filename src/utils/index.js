import _ from 'lodash';
import jsCookie from 'js-cookie';
import config from '../config/index';
import router from '../router';
import store from '../store';


var monthChange = null;

const utils = {
  getContent: async (endpoint, params={}) => {
    // Parameter
    let pages = '';
    let fields = '';
    let filter = '';

    const api = endpoint.includes('options') ? 'acf/v3/' : 'wp/v2/';

    if (params.pages) {
      params.pages.map(id => {
        pages += '&_include[]=' + id;
      });
    }

    if (params.fields) {
      params.fields.map(field => {
        fields += '&_fields[]=' + field;
      });
    }

    filter += params.per_page ? '&per_page=' + params.per_page : '';
    filter += params.offset ? '&offset=' + params.offset : '';
    filter += params.orderby ? '&orderby=' + params.orderby : '';
    filter += params.meta_key ? '&meta_key=' + params.meta_key : '';
    filter += params.order ? '&order=' + params.order : '';

    let parameter = (pages || fields || filter) ? '?' + pages + fields + filter : '';
    const query = config.API_LOCATION + api + endpoint + parameter;

    const response = await fetch(query);

    if (response.status == 200) {
      if (endpoint === 'events') {
        store.commit('setTotalEvents', response.headers.get('X-WP-Total'));
      }
      const json = await response.json();
      
      if (json.length) {
        return json;
      }
    }
  },
  eventMapper: (data) => {
    if (data) {
      return data.map(event => {
        return { 
          id: event.id || '',
          title: _.get(event, 'title.rendered'), 
          content: _.get(event, 'content.rendered'),
          types: event.cats ? event.cats.map((cat) => [cat.name, cat.slug, cat.cat_ID]) : '',
          tags: event.custom_tags ? event.custom_tags.map((tag) => tag.name) : '',
          date: date(_.get(event, 'acf.event_date')),
          entry: _.get(event, 'acf.event_entry'),
          start: _.get(event, 'acf.event_start'),
          end: _.get(event, 'acf.event_end'),
          location: _.get(event, 'acf.event_common_information.event_location'),
          organizer: _.get(event, 'acf.event_common_information.event_organizer'),
          presenter: _.get(event, 'acf.event_common_information.event_presenter'),
          spotify: _.get(event, 'acf.event_common_information.event_spotify'),
          website: _.get(event, 'acf.event_common_information.event_website'),
          image: _.get(event, 'acf.event_common_information.event_image'),
          vvk: _.get(event, 'acf.event_sale_information.event_pre_sale'),
          ak: _.get(event, 'acf.event_sale_information.event_box_office'),
          tickets: _.get(event, 'acf.event_sale_information.event_ticket_link'),
          quick: _.get(event, 'acf.event_quick_information'),
        }
      });
    }
  },
  pageMapper: (data) => {
    if (data) {
      return { 
        id: data.id || '',
        title: _.get(data, 'acf.page_title'),
        subtitle: _.get(data, 'acf.page_subtitle'),
        image: _.get(data, 'acf.page_image'),
        wp_title: _.get(data, 'title.rendered'),
        content: _.get(data, 'content.rendered')
      }
    }
  },
  homeMapper: (data) => {
    if (data) {
      return { 
        id: data.id || '',
        title: _.get(data, 'acf.page_title'),
        subtitle: _.get(data, 'acf.page_subtitle'),
        image: _.get(data, 'acf.page_image'),
        blackboard: _.get(data, 'acf.home_blackboard'),
        important: {
          exists: _.get(data, 'acf.home_is_important'),
          title: _.get(data, 'acf.home_important.home_important_title'),
          content: _.get(data, 'acf.home_important.home_important_content'),
          image: _.get(data, 'acf.home_important.home_important_image'),
        },
        content: _.get(data, 'content.rendered')
      }
    }
  },
  errorRouter: (error) => {
    if (error.message == 404) {
      router.push('/404');
    }
  },
  translateWeekday: (value) => {
    return {
      Mon: 'Mo',
      Tue: 'Di',
      Wed: 'Mi',
      Thu: 'Do',
      Fri: 'Fr',
      Sat: 'Sa',
      Sun: 'So'
    }[value]
  },
  translateMonth: (value) => {
    return {
      Jan: 'Jan',
      Feb: 'Feb',
      Mar: 'März',
      Apr: 'Apr',
      May: 'Mai',
      Jun: 'Jun',
      Jul: 'Jul',
      Aug: 'Aug',
      Sept: 'Sept',
      Oct: 'Okt',
      Nov: 'Nov',
      Dec: 'Dez',
    }[value]
  },
  setCookie: (name, payload, expires=1) => {
    jsCookie.set(name, payload, { expires: expires });
  },
  getCookie: (name) => {
    return jsCookie.get(name);
  }
}

function date(string) {
  let change;
  let y = string.substring(0,4);
  let m = string.substring(4,6);
  let d = string.substring(6,8);

  let dateString = new Date(y, m -1, d) + '';

  let [full, weekday, month, day, year] = dateString.match(/(.{3})\s(.{3})\s(\d{2})\s(\d{4})/);

  if (monthChange != null) {
    const res = monthChange != month ? true : false;
    monthChange = month;
    change = res;
  } else {
    monthChange = month;
    change = true;
  }

  return {
    full: {
      en: full
    },
    weekday: utils.translateWeekday(weekday),
    day: day,
    month: utils.translateMonth(month),
    year: year,
    change: change
  };
}

export default {
  get: {
    content: utils.getContent,
  },
  map: {
    events: utils.eventMapper,
    page: utils.pageMapper,
    home: utils.homeMapper
  },
  error: {
    route: utils.errorRouter
  },
  cookie: {
    get: utils.getCookie,
    set: utils.setCookie
  },
  translate: {
    weekday: utils.translateWeekday,
    month: utils.translateMonth
  }
};

export const get = {
  content: utils.getContent,
};

export const error = {
  route: utils.errorRouter
};

export const cookie = {
  get: utils.getCookie,
  set: utils.setCookie
};

export const map = {
  events: utils.eventMapper,
  page: utils.pageMapper,
  home: utils.homeMapper
};

export const translate = {
  weekday: utils.translateWeekday,
  month: utils.translateMonth
};