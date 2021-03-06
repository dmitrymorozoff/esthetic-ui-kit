import React from "react";
import { Collapse, CollapseContent, CollapseTitle } from "../src/lib";

describe("<Collapse/>", () => {
    it("should render a default collapse", () => {
        const component = shallow(
            <Collapse>
                <CollapseTitle>Ornithorhynchus anatinus</CollapseTitle>
                <CollapseContent>
                    The platypus (Ornithorhynchus anatinus), sometimes referred to as the duck-billed platypus, is a
                    semiaquatic egg-laying mammal endemic to eastern Australia, including Tasmania.
                    <br />
                    <br />
                    Together with the four species of echidna, it is one of the five extant species of monotremes, the
                    only mammals that lay eggs instead of giving birth to live young. The animal is the sole living
                    representative of its family (Ornithorhynchidae) and genus (Ornithorhynchus), though a number of
                    related species appear in the fossil record.
                    <br />
                    <br />
                    The first scientists to examine a preserved platypus body (in 1799) judged it a fake, made of
                    several animals sewn together
                </CollapseContent>
            </Collapse>,
        );
        expect(component).toMatchSnapshot();
    });
});
