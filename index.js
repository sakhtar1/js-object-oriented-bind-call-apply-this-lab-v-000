//Your code here
justInvoke(fn) {
    fn.filter(function(fn){
      return fn == this.fn
    }
}
