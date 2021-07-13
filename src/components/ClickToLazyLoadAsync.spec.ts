import { mount } from '@cypress/vue'
import ClickToLazyLoadAsync from '@/components/ClickToLazyLoadAsync.vue'
import { customDirective } from '@/customDirective';
import Vue from 'vue';

describe('ClickToLazyLoadAsync', () => {
  before(() => {
    Vue.directive('custom-directive', customDirective);
  });
  it('loads a component lazily when clicking a button', () => {
    mount(ClickToLazyLoadAsync)
    cy.get('button').click()
    cy.get('p').should('contain.text', `This is a test component to be loaded lazily with import('...')`)
  })
})