import googleMapsUrl from "./maps";

describe("Getting a valid url from data", () => {
  it("Returns a correct url with ", () => {
    const address = {
      street: "621 W 6th Ave",
      city: "Anchorage",
      state: "Alaska",
      zipcode: "99501"
    };
    expect(googleMapsUrl(address)).toMatchSnapshot();
  });
  it("Returns the correct url without zipcode", () => {
    const address = {
      street: "5000 W International Airport Rd",
      city: "Anchorage",
      state: "Alaska"
    };
    expect(googleMapsUrl(address)).toMatchSnapshot();
  });
  it("Returns the correct url with extra white space", () => {
    const address = {
      street: "621 W 6th Ave",
      city: "Anchorage",
      state: "Alaska",
      zipcode: "99501"
    };
    const malformedAddress = {
      street: "\t621   W 6th   Ave\t",
      city: "Anchorage\t\t",
      state: "Alaska",
      zipcode: "99501"
    };
    expect(googleMapsUrl(address)).toEqual(googleMapsUrl(malformedAddress));
  });
});
