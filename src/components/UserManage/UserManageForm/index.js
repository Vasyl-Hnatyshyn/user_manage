import React from 'react';

import Select from '../../../sharedComponents/Select';
import TextArea from '../../../sharedComponents/TextArea';
import EditButton from '../../../sharedComponents/EditButton';
import Error from '../../../sharedComponents/Error';

import { fieldsModel, genderList } from '../mock';

import '../style.css';

const UserManageForm = ({ handleSubmit, handleChange, handleBlur, touched, values, errors }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-rapper">
      {fieldsModel.map(({ label, type, name }, ndx) => (
        <label key={ndx} className="form_label">
          {label}
          <input
            className="form_field"
            type={type}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[name]}
            name={name}
          />
          {errors[name] && touched[name] && <Error message={errors[name]} />}
        </label>
      ))}

      <Select
        label_style={'form_label'}
        label="Gender:"
        name="gender"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.gender}
        list={genderList}
      />
      {touched.gender && errors.gender && <Error message={errors.gender} />}

      <TextArea
        label_style={'form_label'}
        label="Biography:"
        name="biography"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.biography}
      />
      {touched.biography && errors.biography && <Error message={errors.biography} />}

      <label className="form_label checkbox">
        Enabled:
        <input
          type="checkbox"
          name="is_active"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.is_active}
          checked={values.is_active}
        />
      </label>
    </div>
    <div className="form_btn-wrapper">
      <EditButton type="submit" label="Submit" />
    </div>
  </form>
);

export default UserManageForm;
