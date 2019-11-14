import React from 'react'
import ReactDOM from 'react-dom'
import { create } from 'react-test-renderer'
import Tuile from '../components/tuile'
import TuileNav from '../components/tuileNav'

describe("Tuile component", () => {
    test("renders without crashing", () => {
        const div = document.createElement('div')
        ReactDOM.render(<Tuile name='' formationName=''/>, div)
    })
})

describe("TuileNav component", () => {
    test("renders without crashing", () => {
        const div = document.createElement('div')
        ReactDOM.render(<TuileNav formation=''/>, div)
    })
})

describe("Tuile component", () => {
  test("matches the snapshot", () => {
    expect(<Tuile name='' formationName='IG'/>).toMatchSnapshot();
  });
});

describe("TuileNav component", () => {
    test("matches the snapshot", () => {
      expect(<TuileNav formation='IG'/>).toMatchSnapshot();
    });
  });

describe("Tuile component", () => {
    test("is showed as it is visible by default", () => {
      const component = create(<Tuile name="" formationName="" />);
      const instance = component.getInstance();
      expect(instance.state.visibility).toBe("container");
    });
});

describe("Tuile component", () => {
    test("is closed if asked", () => {
      const component = create(<Tuile name="" formationName="" />);
      const instance = component.getInstance();
      instance.close();
      expect(instance.state.visibility).toBe("hidden");
    });
});
