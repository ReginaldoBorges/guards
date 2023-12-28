import { CanMatchFn, Route, UrlSegment, UrlTree } from '@angular/router';

export const CanLoadGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  // console.log(route);
  // console.log(segments);
  if (segments[1]?.path === 'leads' || segments[0]?.path === 'core') {
    return true;
  }
  alert('Módulo não foi carregado!');
  return false;
};
