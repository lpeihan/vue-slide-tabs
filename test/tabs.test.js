import { mount } from "@vue/test-utils";
import Tabs from "../src/tabs.vue";

describe("vue-slide-tabs", () => {
  const wrapper = mount(Tabs, {
    propsData: {
      tabs: [
        { label: "关注" },
        { label: "推荐" },
        { label: "最新" }
      ]
    }
  });

  const tabs = wrapper.vm.$options.props.tabs;
  it('tabs is of type array~', () => {
    expect(tabs.type).toBe(Array);
  })

  it("The title's length should be 3", () => {
    const divArray = wrapper.findAll("div.title-item");
    expect(divArray.isEmpty()).toBe(false);
  });
});
