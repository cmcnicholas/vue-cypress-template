import { mount } from '@cypress/vue'
import Vue from 'vue';
import App from './App.vue'
import { customDirective } from './customDirective';

describe('App', () => {
  before(() => {
    Vue.directive('custom-directive', customDirective);
  });
  it('renders a message', () => {
    mount(App)
    cy.get('h1').should('contain.text', 'Welcome to Your Vue.js + TypeScript App')
  })
})