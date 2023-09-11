import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const usersGuard: CanActivateFn = (route, state) => {
  let role = localStorage.getItem('role');

  if (role=="admin") {
    return true
  }
  inject(Router).navigateByUrl('/admin', { replaceUrl: true });
  inject(ToastrService).error("No tienes acceso", "Error");
  return false;
};
