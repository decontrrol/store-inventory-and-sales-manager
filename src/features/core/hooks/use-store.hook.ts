import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';

import { createCoreSlice } from '../core.store';

import type { CoreSlice } from '../models/core.model';

export const useBoundStore = create<CoreSlice>()(
  // CoreSlice & UserSlice
  devtools(
    persist(
      subscribeWithSelector((...a) => ({
        ...createCoreSlice(...a),
      })),
      {
        name: 'main-storage',
        partialize: (state) => ({
          rightSidebarState: state.rightSidebarState,
          leftSidebarState: state.leftSidebarState,
        }),
        // merge: (persistedState, currentState) => ({
        //   ...currentState,
        //   ...(persistedState),
        // Always set user field's initial value to undefined, to prevent localstorage manipulation
        // user: undefined,
        // }),
      },
    ),
  ),
);
