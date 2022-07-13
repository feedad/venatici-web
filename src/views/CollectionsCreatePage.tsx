import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type CollectionsFormData = { }

export default function CollectionsCreatePage() {
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm<CollectionsFormData>();
  const navigate = useNavigate();

  const submit = () => {
    toast.success('Upload collections success!');
    navigate('..');
  }

  return (
    <>
      <div style={{ marginBottom: 50 }}>
        <div className="fw-bold" style={{ fontSize: '2rem' }}>Collection Name</div>
        <div style={{ fontSize: '1.5rem' }}>1024px × 1024px | 3 Layers | 0 Traits</div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div className="fw-bold mb-3" style={{ fontSize: '1.5rem' }}>Collection Preview</div>
        <div className="d-flex" style={{ gap: 50 }}>
          <div style={{ flexShrink: 0 }}>
            <img src="https://picsum.photos/1366/768" alt="" className='mb-3' style={{ width: 200, height: 200, objectFit: 'cover' }} />
            <div className='mt-3'>
              <button className="btn btn-black-gradient w-100">
                <div className="content">
                  <span className='me-3'>Refresh</span>
                  <i className="fa fa-sync-alt"></i>
                </div>
              </button>
            </div>
          </div>
          <div style={{ flexGrow: 1 }}>
            <div className='mb-3'>
              <div className="label-with-sublabel">
                <div className="label">New Layer Group (Trait Category)</div>
                <div className="sublabel">Add a new group for yout generative art.</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='e.g. Background , accesories, body' />
            </div>
            <button className="btn btn-black-gradient px-3">
              <div className="content">Add new layer group</div>
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 50 }}>
        <div className="d-flex mb-3" style={{ gap: 20 }}>
          <div className="fw-bold" style={{ fontSize: '1.5rem' }}>Layer Name | 0 Layer(s)</div>
          <button className="btn btn-black-gradient">
            <div className="content">Show / Hide</div>
          </button>
        </div>
        <div className="d-flex" style={{ gap: 20 }}>
          <button className="btn btn-primary-gradient">
            <div className="content">Delete</div>
          </button>
          <button className="btn btn-purple-gradient">
            <div className="content">Bring to front</div>
          </button>
        </div>
      </div>

      <div style={{ marginBottom: 100 }}>
        <div className="label-with-sublabel">
          <div className="label">Trait Name | Rarity</div>
          <div className="sublabel">Enter the name of the trait and the rarity of its occurence.</div>
        </div>
        <div className="row row-cols-2 mb-3">
          <div>
            <input type="text" className="form-control form-control-grey" placeholder='Your original file name or change' />
          </div>
          <div>
            <input type="number" className="form-control form-control-grey" placeholder='0' />
          </div>
        </div>
        <button className="btn btn-black-gradient">
          <div className="content">Upload Trait(s)</div>
        </button>
      </div>

      <div>
        <div className='mb-3'>You can add maximum 15 layer collections.</div>
        <button className="btn btn-black-gradient" onClick={submit}>
          <div className="content">Upload Collection</div>
        </button>
      </div>
    </>
  )
}
