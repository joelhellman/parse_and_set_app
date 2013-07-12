(function() {

  return {
    events: {
      'app.activated':'initialize'
    },

    initialize: function(data) {
      if (data.firstLoad){
        var value = this.execRegexOnDescription();
        var key = 'custom_field_' + this.setting('field_id');

        if (value && _.isEmpty(this.ticket().customField(key))){
          this.ticket().customField(key, value);
        }
      }

    },

    execRegexOnDescription: function(){
      return (this.ticket().description().match(this.setting('regex')) || [])[1] || "";
    }
  };

}());
