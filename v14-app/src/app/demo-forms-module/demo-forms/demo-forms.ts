import { FormControl, FormGroup, UntypedFormControl } from '@angular/forms';

// Form controls now accept a generic type argument
const fooControl: FormControl<string | null> = new FormControl(
  'some initial string value'
);

// type fooValueType = string
type fooValueType = typeof fooControl.value;

// To get untyped form controls, we now need to use the explicitly untyped versions
const untypedControl = new UntypedFormControl();

// type untypedControlValueType = any
type untypedControlValueType = typeof untypedControl.value;

// Much better development experience/helps catch bugs during dev loops
const foobarGroup = new FormGroup({
  foo: new FormControl(''),
  bar: new FormControl(0),
});

type foobarValueType = typeof foobarGroup.value;

const barOrFooControl: FormControl<'foo' | 'bar'> = new FormControl('foo', {
  nonNullable: true,
});

barOrFooControl.setValue('bar');
barOrFooControl.reset();

// After reset, value will be initial value ('foo')
// Without nonNullable: true, value would be null
const afterReset = barOrFooControl.value;
