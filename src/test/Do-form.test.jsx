import React from 'react'
import ReactDOM from 'react-dom'
import DoForm from '../components/do-form'

describe("DoForm", () => {
  test("renders without crashing", () => {
    const div = document.createElement('div')
    ReactDOM.render(<DoForm />, div)
  });
});
/*
describe("DoForm", () => {
    test("clicks on the correct svg part", () => {
        const component = create(<DoForm />);
        const instance = component.root;
        instance.find('#PRO').simulate('click');
        expect(true);
    });
  });*/