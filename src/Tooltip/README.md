# Tooltip component

> A Tooltip component

## Properties

| propName        | propType                                                      | defaultValue | isRequired | description |
|-----------------|---------------------------------------------------------------|--------------|------------|-------------|
| children        | element                                                       |              |            |             |
| content         | node                                                          |              | true       |             |
| placement       | string (top, right, bottom, left)                             | top          |            |             |
| alignment       | string (top, right, bottom, left, center)                     | center       |            |             |
| theme           | string (light, dark, error (For Restaurants. Unapproved yet)) | light        |            |             |
| showDelay       | number                                                        | 200          |            |             |
| hideDelay       | number                                                        | 500          |            |             |
| showTrigger     | string (custom, mouseenter, mouseleave, click, focus, blur)   | mouseenter   |            |             |
| hideTrigger     | string (custom, mouseenter, mouseleave, click, focus, blur)   | mouseleave   |            |             |
| maxWidth        | string (i.e. '1000px')                                        | 1200px       | false      | The tooltip max width |
| active          | bool                                                          | false        |            |             |
| bounce          | bool                                                          | false        |            |             |
| moveBy          | object ({x: Number, y: Number})                               |              |            |             |
| disabled        | bool                                                          | false        |            |             |
| moveArrowTo     | Number                                                        |              |            | Allows to position the arrow relative to tooltip. Positive value calculates position from left/top. Negative one calculates position from right/bottom. |
| onClickOutside  | func                                                          | null         | false      | Callback when cliking outside |
| appendToParent  | bool                                                          | false        | false      | In some cases when you need a tooltip scroll with your element, you can append the tooltip to the direct parent, just don't forget to apply `relative`, `absolute` positioning. And be aware that some of your styles may leak into tooltip content. |
| zIndex          | number                                                        | 2000         | false      | z index of the tooltip |
