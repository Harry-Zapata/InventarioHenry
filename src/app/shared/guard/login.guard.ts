import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const loginGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem('token');
  if (token!=null || token!=undefined){
    return true 
  }
  inject(Router).navigateByUrl('/login', { replaceUrl: true });
  inject(ToastrService).error("No tienes acceso", "Error");
  return false
};
