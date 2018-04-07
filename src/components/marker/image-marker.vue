<template src="./image-marker.html"></template>

<script>
  export default {
    name: "image-marker",
    data: () => {
      return {
        image: {
          loading: false,
          error: false,
          imageUrl: '',
          markers: [],
          style : 'numeral'
        },
        history: [],
        document : document,
        popup: {
          x: 0,
          y: 0,
          html: ''
        },
        imageRef: {},
        popupRef: {},
        toEdit: "",
        hotspotStyles : {
          numeral : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
          romanNumeral :
            ['I','II','III','IV','V','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'],
          alphabeticUp: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t'],
          alphabeticLow: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T']
        },
        preview: false,
        headers : {
          "Access-Control-Allow-Origin" : "*",
          "Access-Control-Request-Method" : "*",
          "Content-type" : "application/json"
        }
      }
    },
    methods: {
      togglePreview() {
        this.preview = !this.preview;
      },
      pushHistory() {
        if (this.image.markers.length) {
          this.clearActive();
          this.clearToEdit();
          this.closePopup();
          this.history.push(Object.assign({}, this.image));
          this.image.markers = [];
        }
      },
      restorePrevious() {
        let prev = this.history.pop();
        this.image.imageUrl = prev.imageUrl;
        this.image.markers = prev.markers;
      },
      clearActive() {
        this.image.markers.forEach(_marker => {
          _marker.active = false;
        });
      },
      addMarker(event) {
        if (this.preview || this.image.markers.length >= this.hotspotStyles.numeral.length) {
          this.clearActive();
          this.closePopup();
          return;
        }
        if (this.popup.html) {
          this.closePopup();
          return this.clearActive();
        }
        this.clearActive();
        const newMarker = {
          x: event ? (event.offsetX)/this.imageRef.width : 0,
          y: event ? (event.offsetY)/this.imageRef.height : 0,
          html: '',
          active: true,
          id : Math.ceil(Math.random() * 100000)
        };
        console.log(newMarker);
        this.image.markers.push(newMarker);
        this.toEdit = newMarker;
        this.popup = newMarker;
      },
      logEvent(event) {
        console.log(event);
      },
      showPopup(marker) {
        this.toEdit = marker;
        let status = marker.active;
        this.clearActive();
        if (!status) {
          marker.active = !marker.active;
          this.popup = marker;
        } else {
          marker.active = false;
          this.closePopup();
        }
      },
      closePopup() {
        this.popup = {};
      },
      clearToEdit() {
        this.toEdit = '';
      },
      deleteMarker(_marker) {
        if (this.popup === _marker) {
          this.closePopup();
        }
        if (this.toEdit === _marker){
          this.clearToEdit()
        }
        let index = this.image.markers.indexOf(_marker);
        this.image.markers.splice(index,1);
      },
      save() {
        this.clearActive();
        this.closePopup();
        this.clearToEdit();
        localStorage.setItem('image',JSON.stringify(this.image));
      }
    },
    created() {
      if (localStorage.image) {
        this.image = JSON.parse(localStorage.image);
        console.log(this.image);
      }
    },
    mounted() {
      this.imageRef = this.$refs.image;
      this.popupRef = this.$refs.popup;

      /*this.$http.post('http://localhost:3000/api/widget').then((res)=>{
        console.log(res.body)
      })*/
    },
  }
</script>

<style src="./image-marker.scss" lang="scss"></style>
