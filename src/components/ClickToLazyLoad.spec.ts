import { mount } from '@cypress/vue'
import ClickToLazyLoad from '@/components/ClickToLazyLoad.vue'
import { customDirective } from '@/customDirective';
import Vue from 'vue';

describe('ClickToLazyLoad', () => {
  before(() => {
    Vue.directive('custom-directive', customDirective);
  });
  it('loads a component lazily when clicking a button', () => {
    mount(ClickToLazyLoad)
    cy.get('button').click()
    cy.get('p').should('contain.text', `This is a test component to be loaded lazily with import('...')`)
  })
})