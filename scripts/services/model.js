'use strict';

app.factory('ModelFactory',
  function ($firebase, FIREBASE_URL) {

    // Create a firebase reference for the models
    var ref = new Firebase(FIREBASE_URL + 'models');

    // Assign the var models to the firebase reference
    var models = $firebase(ref);

    // Declare the Model and its Functions
    var ModelFactory = {
      all: models,
      
      // Create Function
      create: function (model) {
        console.log(model);
        models.$add(model);
        console.log('ModelFactory - create: function(model)');
      },
      
      // Find Function
      find: function (modelId) {
        return models.$child(modelId);
        console.log('ModelFactory - find: function(modelId)');
      },

      // Update Function
      update: function (modelId, model) {
        var modelRef = ref.child(modelId);
        modelRef.$update(model);
        console.log('ModelFactory - update: function(modelId, model)');
      },
      
      // Delete Function
      delete: function (modelId) {
        var modelRef = ref.child(modelId);
        modelRef.$remove();
        console.log('ModelFactory - delete: function(modelId)');
      },
    };

    return ModelFactory;
  });

