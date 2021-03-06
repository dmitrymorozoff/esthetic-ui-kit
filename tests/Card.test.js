import React from "react";
import { Card, Text, Button, CardContent, CardButtons } from "../src/lib";

describe("<Card/>", () => {
    it("should render a default card", () => {
        const component = shallow(
            <Card>
                <CardContent>
                    <Text fontSize="28px" gutterBottom={true}>
                        Penguin
                    </Text>
                    <Text>
                        They live almost exclusively in the Southern Hemisphere, with only one species, the Galapagos
                        penguin, found north of the equator.
                    </Text>
                    <CardButtons>
                        <Button fullWidth={true}>Learn More</Button>
                    </CardButtons>
                </CardContent>
            </Card>,
        );
        expect(component).toMatchSnapshot();
    });
});
