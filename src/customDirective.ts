import { DirectiveBinding, DirectiveOptions } from 'vue/types/options';

export const customDirective: DirectiveOptions = {
  // When the bound element is inserted into the DOM...
  async inserted(el: HTMLElement, binding: DirectiveBinding): Promise<void> {
    el.title = 'BOOYA';
  },
};
