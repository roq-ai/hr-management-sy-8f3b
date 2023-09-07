import * as yup from 'yup';

export const mp3PlayerValidationSchema = yup.object().shape({
  name: yup.string().required(),
  brand: yup.string().nullable(),
  model: yup.string().nullable(),
  storage_capacity: yup.number().integer().nullable(),
  battery_life: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
});
