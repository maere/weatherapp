import Route from '@ember/routing/route';



export default Ember.Route.extend({
    model(params){
      const escapedName = encodedURIComponent(params.name);
      return Ember.$.getJSON(`/api/greeting?name=${escapedName}`);
    }
  });
