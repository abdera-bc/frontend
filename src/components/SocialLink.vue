<template>
  <div class="social-link" :class="{'social-link--small': small}">
    <div v-if="type === 'facebook'" class="social-link__facebook" :class="{'social-link--dark': dark, 'social-link--light': light}">
      <a :href="this.facebook" rel="noreferrer" target="_blank">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
        <path class="st0" d="M299.3,150.3c0-82.6-66.9-149.5-149.5-149.5S0.3,67.7,0.3,150.3C0.3,224.9,55,286.8,126.5,298V193.5h-38v-43.2
          h38v-32.9c0-37.5,22.3-58.2,56.5-58.2c16.4,0,33.5,2.9,33.5,2.9v36.8h-18.9c-18.6,0-24.4,11.5-24.4,23.4v28h41.5l-6.6,43.2h-34.8
          V298C244.7,286.8,299.3,224.9,299.3,150.3L299.3,150.3z"/>
        </svg>
      </a>
    </div>
    <div v-if="type === 'instagram'" class="social-link__instagram" :class="{'social-link--dark': dark, 'social-link--light': light}">
      <a :href="this.instagram" rel="noreferrer" target="_blank">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
        <g>
          <path class="st0" d="M225.7,92.8c-1.6-4.2-4-8-7.3-11.2c-3.1-3.2-7-5.7-11.2-7.3c-3.4-1.3-8.6-2.9-18-3.3
            c-10.2-0.5-13.3-0.6-39.3-0.6l0,0c-25.9,0-29,0.1-39.3,0.6c-9.5,0.4-14.6,2-18,3.3c-4.2,1.6-8,4-11.2,7.3c-3.2,3.1-5.7,7-7.3,11.2
            c-1.3,3.4-2.9,8.6-3.3,18c-0.5,10.2-0.6,13.3-0.6,39.3c0,25.9,0.1,29,0.6,39.3c0.4,9.5,2,14.6,3.3,18c1.6,4.2,4,8,7.3,11.2
            c3.1,3.2,7,5.7,11.2,7.3c3.4,1.3,8.6,2.9,18,3.3c10.2,0.5,13.3,0.6,39.3,0.6s29-0.1,39.3-0.6c9.5-0.4,14.6-2,18-3.3
            c8.5-3.3,15.2-10,18.4-18.4c1.3-3.4,2.9-8.6,3.3-18c0.5-10.2,0.6-13.3,0.6-39.3c0-25.9-0.1-29-0.6-39.3
            C228.6,101.4,227,96.3,225.7,92.8z M149.9,200.1c-27.6,0-49.9-22.3-49.9-49.9s22.3-49.9,49.9-49.9s49.9,22.3,49.9,49.9
            S177.5,200.1,149.9,200.1z M201.8,109.9c-6.4,0-11.7-5.2-11.7-11.7c0-6.4,5.2-11.7,11.7-11.7s11.7,5.2,11.7,11.7
            C213.5,104.7,208.3,109.9,201.8,109.9z"/>
          <path class="st0" d="M149.9,0.3C67.2,0.3,0.1,67.4,0.1,150.2S67.2,300,149.9,300s149.8-67.1,149.8-149.8S232.7,0.3,149.9,0.3z
            M246.5,190.2c-0.5,10.3-2.1,17.4-4.5,23.6c-5,13.1-15.4,23.4-28.4,28.4c-6.2,2.4-13.2,4-23.6,4.5c-10.4,0.5-13.7,0.6-40.1,0.6
            c-26.4,0-29.7-0.1-40.1-0.6c-10.3-0.5-17.4-2.1-23.6-4.5c-6.5-2.4-12.4-6.3-17.2-11.2c-4.9-4.9-8.8-10.7-11.2-17.2
            c-2.4-6.2-4-13.2-4.5-23.6c-0.5-10.4-0.6-13.7-0.6-40.1s0.1-29.7,0.6-40.1c0.5-10.3,2.1-17.4,4.5-23.6c2.4-6.5,6.3-12.4,11.2-17.2
            c4.9-4.9,10.7-8.8,17.2-11.2c6.2-2.4,13.2-4,23.6-4.5c10.4-0.5,13.7-0.6,40.1-0.6c0,0,0,0,0,0h0c0,0,0,0,0,0
            c26.4,0,29.7,0.1,40.1,0.6c10.3,0.5,17.4,2.1,23.6,4.5c6.5,2.4,12.4,6.3,17.2,11.2c4.9,4.9,8.8,10.7,11.2,17.2
            c2.4,6.2,4,13.2,4.5,23.6c0.5,10.4,0.6,13.7,0.6,40.1S247,179.9,246.5,190.2z"/>
          
            <ellipse transform="matrix(0.9999 -1.183313e-02 1.183313e-02 0.9999 -1.7663 1.7848)" class="st0" cx="149.9" cy="150.2" rx="32.4" ry="32.4"/>
        </g>
        </svg>
      </a>
    </div>
    <div v-if="type === 'youtube'" class="social-link__youtube" :class="{'social-link--dark': dark, 'social-link--light': light}">
      <a :href="this.youtube" rel="noreferrer" target="_blank">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
        <path class="st0" d="M292.9,77.9c-3.4-12.8-13.5-22.8-26.3-26.3C243.3,45.2,150,45.2,150,45.2s-93.3,0-116.6,6.1
          C20.9,54.8,10.6,65.1,7.1,77.9C1,101.2,1,149.5,1,149.5s0,48.6,6.1,71.7c3.4,12.8,13.5,22.8,26.3,26.3c23.6,6.4,116.6,6.4,116.6,6.4
          s93.3,0,116.6-6.1c12.8-3.4,22.8-13.5,26.3-26.3c6.1-23.3,6.1-71.7,6.1-71.7S299.2,101.2,292.9,77.9z M120.3,194.2v-89.4l77.6,44.7
          L120.3,194.2z"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import config from '@/config/index'

export default {
  name: 'SocialLink',
  props: {
    type: String,
    dark: Boolean,
    light: Boolean,
    small: Boolean
  },
  data() {
    return {
      facebook: config.FACEBOOK,
      instagram: config.INSTAGRAM,
      youtube: config.YOUTUBE
    }
  }
}
</script>

<style scoped lang="scss">
.social-link {
  position: relative;
  height: 40px;
  width: 40px;

  &--small {
    height: 25px;
    width: 25px;
  }

  svg {
    width: 100%;
    height: auto;
  }

  &--light {
    .st0 {
      fill: var(--white)
    }
  }

  &--dark {
    .st0 {
      fill: var(--black)
    }
  }
}
</style>
