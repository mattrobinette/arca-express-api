/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import { v4 as uuid } from 'uuid';
import WidgetsModel from '../models/widgets.model.js';
// import { deleteWidget } from '../controllers/widgets.controller.js';

// Cameron didn't declare this function as async, we may or may not need it.
export default class WidgetsCoordinator {
  static getWidgets = () => {
    console.log('\t Coordinator : getWidgets()');

    return WidgetsModel.getWidgets();
  };

  static createWidget = (newWidget) => {
    console.log('\t Coordinator : createWidget()');

    const widget = {
      ...newWidget,
      id: uuid(),
    };

    return WidgetsModel.createWidget(widget);
  };

  static getWidget = (id) => {
    console.log('\t Coordinator : getWidget()');
    return WidgetsModel.getWidget(id);
  };

  static deleteWidget = (id) => {
    console.log('\t Coordinator : deleteWidget()');
    return WidgetsModel.deleteWidget(id);
  };

  static replaceWidget = (id, widget) => {
    console.log('\t Coordinator : replaceWidget()');
    const replaceWidget = {
      ...widget,
      id,
    };
    return WidgetsModel.replaceWidget(id, replaceWidget);
  };

  static updateWidget = (id, widget) => {
    console.log('\t Coordinator : updateWidget()');
    return WidgetsModel.updateWidget(id, widget);
  };
}