'use strict';

function cdEventsService(cdApi, $q){
  function topfail(err){
    console.log(err);
  }

  return {
    getEvent: function(id, win, fail) {
      cdApi.get('events/' + id, win, fail || topfail);
    },
    createEvent: function(eventInfo, win, fail){
      cdApi.post('create-event', {eventInfo: eventInfo}, win, fail || topfail);
    },
    list: function(query, win, fail){
      cdApi.post('events', {query: query}, win, fail || topfail);
    },
    search: function(search) {
      return $q(function(resolve, reject) {
        cdApi.post('events/search', {search: search}, resolve, reject);
      });
    },
    applyForEvent: function(eventId, win, fail) {
      cdApi.get('events/' + eventId + '/apply', win, fail || topfail);
    }
  };
}

angular.module('cpZenPlatform')
  .service('cdEventsService', ['cdApi', '$q', cdEventsService]);
