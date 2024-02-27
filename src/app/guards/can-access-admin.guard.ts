import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivate: CanActivateFn = () => {
  const router = inject(Router);
  const loggedInUser = JSON.parse(
    localStorage.getItem('loggedInUser') as string
  );
  if (loggedInUser && loggedInUser.user.id === 1) {
    return true;
  } else {
    router.navigateByUrl('/login');
    return false;
  }
};
