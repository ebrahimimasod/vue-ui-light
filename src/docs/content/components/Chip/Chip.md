# VChip

#### Usage

```js
import { VChip } from "vue-ui-light";
```

<br/>
<br/>

#### Variants

<example>
  <template v-slot:preview>
    <div class="space-y-1 space-x-3">
      <v-chip>Default Chip</v-chip>
      <v-chip variant="primary">Primary Chip</v-chip>
      <v-chip variant="secondary">Secondary Chip</v-chip>
      <v-row/>
      <v-chip variant="tertiary">Tertiary Chip</v-chip>
      <v-chip variant="info">Info Chip</v-chip>
      <v-chip variant="danger">Danger Chip</v-chip>
      <v-row/>
      <v-chip variant="warning">Warning Chip</v-chip>
      <v-chip variant="success">Success Chip</v-chip>
      <v-chip variant="orange">Orange Chip</v-chip>
    </div>
  </template>
  <template v-slot:source>

    ```html
    <v-chip>Default Chip</v-chip>
    <v-chip variant="primary">Primary Chip</v-chip>
    <v-chip variant="secondary">Secondary Chip</v-chip>
    <v-chip variant="tertiary">Tertiary Chip</v-chip>
    <v-chip variant="info">Info Chip</v-chip>
    <v-chip variant="danger">Danger Chip</v-chip>
    <v-chip variant="warning">Warning Chip</v-chip>
    <v-chip variant="success">Success Chip</v-chip>
    <v-chip variant="orange">Orange Chip</v-chip>
    ```

  </template>
</example>

#### Sizes

<example>
  <template v-slot:preview>
    <div class="space-x-3">
      <v-chip size="lg"> Large</v-chip>
      <v-chip size="md"> Medium</v-chip>
      <v-chip size="sm"> Small</v-chip>
    </div>
  </template>
  <template v-slot:source>

    ```html
    <v-chip size="lg"> Large</v-chip>
    <v-chip size="md"> Medium</v-chip>
    <v-chip size="sm"> Small</v-chip>
    ```

  </template>
</example>

#### Icons

<example>
  <template v-slot:preview>
    <div class="space-x-1">
      <v-chip icon-left="description"> Left Icon</v-chip>
      <v-chip icon-right="description"> Right Icon</v-chip>
      <v-chip icon-right="description" icon-left="description"> Double Icon</v-chip>
      <v-chip icon-left="description" icon-only/>
    </div>
  </template>
  <template v-slot:source>

    ```html
    <v-chip icon-left="description" size="md"> Left Icon</v-chip>
    <v-chip icon-right="description" size="md"> Right Icon</v-chip>
    <v-chip icon-right="description" icon-left="description" size="md"> Double Icon</v-chip>
    <v-chip icon-left="description" size="md" icon-only/>
    ```

  </template>
</example>

#### States

<example>
  <template v-slot:preview>
    <div class="space-x-4">
      <v-chip variant="primary">Normal Chip</v-chip>
      <v-chip variant="primary" active>Active Chip</v-chip>
      <v-chip variant="primary" loading>Loading</v-chip>
      <v-chip variant="primary" disabled>Disabled Chip</v-chip>
    </div>
    <br/>
    <v-chip variant="primary" block>Block Chip</v-chip>
  </template>
  <template v-slot:source>

    ```html
    <v-chip variant="primary">Normal Chip</v-chip>
    <v-chip variant="primary" active>Active Chip</v-chip>
    <v-chip variant="primary" loading>Loading</v-chip>
    <v-chip variant="primary" disabled>Disabled Chip</v-chip>
    <v-chip variant="primary" block>Block Chip</v-chip>
    ```

  </template>
</example>

#### Outline Mode

<example>
  <template v-slot:preview>
    <div class="space-y-1 space-x-3">
      <v-chip outline> OutlinE</v-chip>
      <v-chip outline icon-left="description"> OutlinE</v-chip>
      <v-chip outline icon-right="description"> OutlinE</v-chip>
      <v-chip outline icon-right="description" icon-left="description"> ICONS</v-chip>
      <v-chip outline icon-left="description" icon-only/>
      <v-row/>
      <v-chip outline size="md" disabled> Disabled</v-chip>
      <v-chip outline icon-left="description" size="md" disabled icon-only/>
      <v-chip outline loading>Loading</v-chip>
    </div>
  </template>
  <template v-slot:source>

    ```html
    <v-chip> OutlinE</v-chip>
    <v-chip icon-left="description"> OutlinE</v-chip>
    <v-chip icon-right="description"> OutlinE</v-chip>
    <v-chip icon-right="description" icon-left="description"> ICONS</v-chip>
    <v-chip icon-left="description" icon-only/>
    <v-chip size="md" disabled> Disabled</v-chip>
    <v-chip icon-left="description" size="md" disabled icon-only/>
    <v-chip loading>Loading</v-chip>
    </div>
    ```

  </template>
</example>

#### Anchor buttons and custom tags

<example>
  <template v-slot:preview>
    <div class="space-y-1">
      <v-row>
        <v-chip variant="link" tag="a" href="https://google.com">Anchor Chip</v-chip>
      </v-row>
      <v-row>
        <v-chip variant="link" to="/docs/components/button">Router Chip</v-chip>
      </v-row>
    </div>
  </template>
  <template v-slot:source>

    ```html
    <v-chip tag="a" href="https://google.com">Anchor Chip</v-chip>
    <v-chip
        variant="link"
        to="/docs/components/button"
    >
      Router Chip
    </v-chip>
    ```

  </template>
</example>

<br/>
<hr/>
<br/>

## Props

| Prop name | Description                         | Type    | Values                                                                                                  | Default   |
| --------- | ----------------------------------- | ------- | ------------------------------------------------------------------------------------------------------- | --------- |
| disabled  | toggle disabled state.              | boolean | -                                                                                                       | false     |
| outline   | Chip in outline mode/style          | boolean | -                                                                                                       | false     |
| variant   | Chip's different colors and styles. | string  | `neutral`, `primary`, `secondary`, `tertiary`, `danger`, `warning`, `info`, `success`, `link`, `orange` | 'neutral' |
| size      | Chip's different sizes.             | string  | `sm`, `md`, `lg`                                                                                        | 'md'      |
| iconLeft  | Chip's left icon.                   | string  | `Any valid icon name.`                                                                                  |           |
| close     | Closeable Chip.                     | boolean | -                                                                                                       | false     |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |
