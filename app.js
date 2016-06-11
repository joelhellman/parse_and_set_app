(function() {

  return {
    events: {
      'app.activated':'onAppActivated',
      'updateField.done': 'onUpdateFieldDone',
      'updateField.fail': 'onUpdateFieldFail'
    },
    requests: {
      updateField: function(value) {
        return {
          url: helpers.fmt('/api/v2/tickets/%@.json', this.ticket().id()),
          method: 'PUT',
          dataType: 'json',
          contentType: 'application/json',
          data: JSON.stringify({
            ticket: {
              custom_fields: [
                {
                  id: this.setting('result_field'),
                  value: value
                }
              ]
            }
          })
        };
      }
    },

    onAppActivated: function(app) {
      if (app.firstLoad){
        _.defer(this.initialize.bind(this));
      }
    },

    onUpdateFieldDone: function() {
      var msg = this.I18n.t('match_found_message', {
        appName: this.setting('title'),
        value: this.sentValue,
        label: this.setting('result_field_label')
      });
      services.notify(msg);
    },

    onUpdateFieldFail: function() {
      var msg = this.I18n.t('update_error_message', {
        appName: this.setting('title'),
        value: this.sentValue,
        label: this.setting('result_field_label')
      });
      services.notify(msg, 'alert');
    },

    initialize: function() {
      var key = helpers.fmt('custom_field_%@',this.setting('result_field'));
      if (!_.isEmpty(this.ticket().customField(key))) {
        // don't overwrite existing values
        return;
      }
      var matchedValue = this.execRegexOnFields();
      if (matchedValue){
        this.sentValue = matchedValue;
        this.ajax('updateField', this.sentValue);
      }
    },

    execRegexOnFields: function(){
      var value = '';

      var ticket = this.containerContext().ticket;
      var first_comment = _.last(ticket.comments);
      ticket.description = first_comment.value;

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
      return this.setting('regexp');
    })
  };

}());
