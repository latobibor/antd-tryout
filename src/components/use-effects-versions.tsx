import React, { useEffect, useState } from "react";
import { Form, Checkbox, Button } from "antd";
import { ComponentToggler } from "./component-toggler";

export function EffectsVersions() {
  const [showNoArrayVersion, setShowNoArrayVersion] = useState<boolean>(false);

  const [showStateInArrayVersion, setShowStateInArrayVersion] = useState<
    boolean
  >(false);

  return (
    <div>
      <Form>
        <ComponentToggler title="Empty Array Version">
          <EmptyArrayVersion />
        </ComponentToggler>

        <ComponentToggler title="No Array Version">
          <NoArrayVersion />
        </ComponentToggler>

        <ComponentToggler title="State Property In Array Version">
          <StatePropertyArrayVersion />
        </ComponentToggler>
      </Form>
    </div>
  );
}

function EmptyArrayVersion() {
  useEffect(() => {
    console.log("EmptyArrayVersion was mounted");

    return () => {
      console.log("EmptyArrayVersion will be unmounted");
    };
  }, []);

  return (
    <div>
      Hello. I am empty array version, please check console for lifecycle events
    </div>
  );
}

function NoArrayVersion() {
  const [someNumber, setSomeNumber] = useState<number>(0);

  useEffect(() => {
    console.log("Render happened");

    // the returned function will be also called on render not just on onmount!!!
    return () => {
      console.log("Unmount or render happened");
    };
  });

  function addOneToNumber() {
    setSomeNumber(someNumber + 1);
  }

  return (
    <div>
      <span className="danger">{someNumber}</span>
      <Button onClick={addOneToNumber} role="button">
        Press to increment the number
      </Button>
      Hello. I am No array version, please check console for lifecycle events
    </div>
  );
}

function StatePropertyArrayVersion() {
  const [trackedNumber, setTrackedNumber] = useState<number>(0);
  const [ignoredNumber, setIgnoredNumber] = useState<number>(0);

  useEffect(() => {
    console.log("State changed for trackedNumber");

    // the returned function will be also called on render not just on onmount!!!
    return () => {
      console.log("Unmount or state changed for trackedNumber happened");
    };
  }, [trackedNumber]);

  function addOneToSomeNumber() {
    setTrackedNumber(trackedNumber + 1);
  }

  function addOneToIgnoredNumber() {
    setIgnoredNumber(ignoredNumber + 1);
  }

  return (
    <div>
      <span className="danger">Tracked number: {trackedNumber}</span>
      <Button onClick={addOneToSomeNumber} role="button">
        Press to increment the tracked number
      </Button>
      <span className="danger">Ignored number: {ignoredNumber}</span>
      <Button onClick={addOneToIgnoredNumber} role="button">
        Press to increment the ignored number
      </Button>
      Hello. I am State Property In Array version, please check console for lifecycle events
    </div>
  );
}
