<template src="./image-marker.html"></template>

<script>
  export default {
    name: "image-marker",
    data: () => {
      return {
        image: {
          loading: false,
          error: false,
          imageUrl: 'http://pc-choice.com.au/wp-content/uploads/2016/03/motherboard-1080x675.jpg',
          markers: [],
          counter: 1
        },
        history : [],
        popup: {
          x: 0,
          y: 0,
          html: ''
        },
        imageRef: {}
      }
    },
    methods: {
      pushHistory() {
        if (this.image.markers.length) {
          this.history.push(Object.assign({},this.image));
          this.image.markers = [];
          this.image.counter = 1;
        }
      },
      restorePrevious() {
        let prev = this.history.pop();
        this.image.imageUrl = prev.imageUrl;
        this.image.markers = prev.markers;
        this.image.counter = prev.counter;
      },
      clearActive() {
        this.image.markers.forEach(_marker => {
          _marker.active = false;
        });
      },
      addMarker(event) {
        if (this.popup.html) {
          this.closePopup();
          return this.clearActive();
        }
        this.image.markers.push({
          x: event.offsetX,
          y: event.offsetY,
          tag: this.image.counter++,
          html: `test`,
          active: false
        });
      },
      logEvent(event) {
        console.log(event);
      },
      showPopup(marker) {
        let status = marker.active;
        this.clearActive();
        if (!status) {
          marker.active = !marker.active;
          this.popup.html = marker.html;
          this.popup.x = marker.x;
          this.popup.y = marker.y;
        } else {
          marker.active = false;
          this.closePopup();
        }
      },
      closePopup() {
        delete this.popup.x;
        delete this.popup.y;
        delete this.popup.html;
      }
    },
    mounted() {
      this.imageRef = this.$refs.image;
    }
  }
</script>

<style src="./image-marker.scss" scoped lang="scss"></style>
