module.exports = Behavior({
  data: {
    message: {
      x: 1,
      y: 2
    }
  },

  methods: {
    foo() {
      console.log('foo')
    }
  },

  attached() {
    // console.log('behaviors attached.')
    
  }
})