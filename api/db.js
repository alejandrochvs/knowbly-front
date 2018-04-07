const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/knowbly');

const widgetModel = {
    title: String,
    imageUrl: String,
    style: String,
    id: Number
  },
  hotspotModel = {
    html: String,
    x: Number,
    y: Number,
    id: Number
  };
const Widget = mongoose.model('Widget', widgetModel);
const Hotspot = mongoose.model('Hotspot', hotspotModel);

const toExport = {
  widget: {
    get: (_id) => {
      return new Promise((fulfill, reject) => {
        Widget.findOne({_id: _id}, (err, res) => {
          if (err) return reject(err);
          fulfill(res);
        });
      });
    },
    post: (_widget) => {
      return new Promise((fulfill, reject) => {
        const newWidget = new Widget(_widget);
        newWidget.save((err,res) => {
          if (err) return reject(err, res);
          fulfill(res);
        });
      })
    },
    put: (_id, _widget) => {
      return new Promise((fulfill, reject) => {
        const newWidget = new Widget(_widget);
        Widget.update({_id: _id}, {$set: _widget}, {multi: true}, (err, res) => {
          if (err) return reject(err);
          fulfill(res);
        });
      })
    },
    'delete': (_id) => {
      return new Promise((fulfill, reject) => {
        Widget.find({_id: _id}).remove((err,res) => {
          if (err) return reject(err);
          fulfill(res);
        });
      });
    }
  },
  hotspot: {
    get: (_id) => {
      return new Promise((fulfill, reject) => {
        Widget.findOne({_id: _id}, (err, res) => {
          if (err) return reject(err);
          fulfill(res);
        });
      });
    },
    post: (_widget) => {
      return new Promise((fulfill, reject) => {
        const newWidget = new Widget(_widget);
        newWidget.save((err,res) => {
          if (err) return reject(err, res);
          fulfill(res);
        });
      })
    },
    put: (_id, _widget) => {
      return new Promise((fulfill, reject) => {
        const newWidget = new Widget(_widget);
        Widget.update({_id: _id}, {$set: _widget}, {multi: true}, (err, res) => {
          if (err) return reject(err);
          fulfill(res);
        });
      })
    },
    'delete': (_id) => {
      return new Promise((fulfill, reject) => {
        Widget.find({_id: _id}).remove((err,res) => {
          if (err) return reject(err);
          fulfill(res);
        });
      });
    }
  },
};
module.exports = toExport;

