/**
 * more details at @link https://reactnavigation.org/docs/navigating-without-navigation-prop/
 * we use it to navigate without props
 */
import * as React from 'react';
import {RefObject} from 'react';

export const navigationRef: RefObject<any> = React.createRef();

export function navigate(name: string, params: any) {
  navigationRef.current?.navigate(name, params);
}
