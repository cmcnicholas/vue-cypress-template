import { customDirective } from '@/customDirective';
import { mount } from '@cypress/vue'
import Vue from 'vue';
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  before(() => {
    Vue.directive('custom-directive', customDirective);
  });
  it('renders a message', () => {
    const msg = 'Hello Cypress Component Testing!'
    mount(HelloWorld, {
      propsData: {
        msg
      }
    })

    cy.get('h1').should('contain.text', msg)
  })
})