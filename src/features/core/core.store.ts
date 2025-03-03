import { StateCreator } from 'zustand';

import { SidebarState } from './models/core.model';

import type { CoreSlice } from './models/core.model';

export const createCoreSlice: StateCreator<CoreSlice, [], [], CoreSlice> = (
  set,
  get,
) => ({
  leftSidebarState: SidebarState.Collapsed,
  rightSidebarState: SidebarState.Expanded,
  toggleLeftSidebar: (state?: SidebarState) => {
    const value = state ?? get().leftSidebarState;
    const leftSidebarState =
      value === SidebarState.Expanded
        ? SidebarState.Collapsed
        : SidebarState.Expanded;

    set({ leftSidebarState });
  },
  toggleRightSidebar: (state?: SidebarState) => {
    const value = state ?? get().rightSidebarState;
    const rightSidebarState =
      value === SidebarState.Expanded
        ? SidebarState.Collapsed
        : SidebarState.Expanded;

    set({ rightSidebarState });
  },
});
