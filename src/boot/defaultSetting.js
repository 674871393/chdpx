/* eslint-disable*/

import { QInput, QSelect,QTable,QBtn } from 'quasar';
import { boot } from 'quasar/wrappers';

export default boot(() => {
  SetComponentDefaults(QInput, {
    outlined: true,
    dense: true,
    stackLabel: true,
  });
  SetComponentDefaults(QSelect, {
    outlined: true,
    dense: true,
    stackLabel: true,
    'options-dense':true
  });
  SetComponentDefaults(QTable, {
    outlined: true,
    dense: true,
  });
  SetComponentDefaults(QBtn, {
    dense: true,
  });
});

/**
 * Set some default properties on a component
 */
const SetComponentDefaults = (component, defaults) => {
  /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
  Object.keys(defaults).forEach((prop) => {
    component.props[prop] =
      Array.isArray(component.props[prop]) === true || typeof component.props[prop] === 'function'
        ? { type: component.props[prop], default: defaults[prop] }
        : { ...component.props[prop], default: defaults[prop] };
  });
  /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access */
};