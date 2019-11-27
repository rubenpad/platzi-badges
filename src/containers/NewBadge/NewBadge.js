import React from 'react';

import api from '../../api';
import { StyledNewBadge } from './styles';
import Badge from '../../components/Badge/Badge';
import BadgeForm from '../../components/BadgeForm/BadgeForm';
import PageLoading from '../../components/PageLoading/PageLoading';

function NewBadge(props) {
  const [status, setStatus] = useState({ loading: false, error: null });
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: null });
    try {
      await api.badges.create(form);
      setStatus({ loading: false });
      props.history.push('/badges');
    } catch (error) {
      setStatus({ loading: false, error: null });
    }
  };

  if (form.status.loading) return <PageLoading />;

  return (
    <StyledNewBadge>
      <div className="badge">
        <Badge badge={form} />
      </div>
      <div className="form">
        <BadgeForm
          onChange={onChange}
          onSubmit={onSubmit}
          formValues={form}
          error={status.error}
          title="CREATE NEW BADGE"
        />
      </div>
    </StyledNewBadge>
  );
};

export default NewBadge;
