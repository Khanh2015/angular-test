import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivate: CanActivateFn = () => {
  const router = inject(Router);
  const loggedInUser = localStorage.getItem('loggedInUser');
  if (loggedInUser) {
    return true;
  } else {
    router.navigateByUrl('/auth/login');
    return false;
  }
};
