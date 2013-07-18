(function() {

  return {
    events: {
      'app.activated':'initialize'
    },

    initialize: function(data) {
      if (data.firstLoad){
        var value = this.execRegexOnFields();
        var key = 'custom_field_' + this.setting('result_field');

        if (value && _.isEmpty(this.ticket().customField(key))){
          this.ticket().customField(key, value);
        }
      }
    },

    execRegexOnFields: function(){
      var value = '';

      _.each(this.fields(), function(field){
        if (!_.isEmpty(this.containerContext().ticket[field]) &&
           _.isEmpty(value)){
          value = (this.containerContext().ticket[field].match(this.regexp()) || [])[1] || "";
        }
      }, this);

      return value;
    },

    fields: function(){
      return _.compact(this.setting('fields').split(','));
    },

    regexp: _.memoize(function(){
      return this.setting('regex');
    })
  };

}());
