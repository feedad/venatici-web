import React, { useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

type MyMintsFormData = {
  nftName: string,
  projectSymbol: string,
  projectSupply: number,
  royaltyPercentage: number,
  nftDescription: string,
  publicDateTime: Date,
  publicPrice: number,
  primaryAddress: string,
  secondaryAddress1: string,
  secondaryAddress2: string,
  secondaryAddress3: string,
  secondaryShare1: number,
  secondaryShare2: number,
  secondaryShare3: number,
  website: string,
  discord: string,
  twitter: string,
  anythingElse: string
}

export default function MyMintsPage() {
  const [showForm, setShowForm] = useState(false);
  const { register, handleSubmit, watch, formState: { errors }, control } = useForm<MyMintsFormData>();
  const navigate = useNavigate();

  const submit: SubmitHandler<MyMintsFormData> = (data) => {
    console.log(data);
    toast.success('Thanks for submitting your mints!');
    navigate('/mint/solana');
  }

  return (
    <>
      <div style={{ marginBottom: 50 }}>
        <div className="fw-bold mb-3" style={{ fontSize: '2rem' }}>Solana Mints</div>
        <div className='mb-1' style={{ fontSize: '1.5rem' }}>Request New Mint</div>
        <div className='mb-4'>To deploy your custom mint page, please fill in the form below.</div>
        <button className="btn btn-black-gradient px-3" onClick={() => setShowForm(!showForm)}>
          <div className="content">Show Form</div>
        </button>
      </div>

      {showForm && (
        <div style={{ marginBottom: 50 }}>
          <div className="row row-cols-2 mb-4">
            <div>
              <div className="label-with-sublabel">
                <div className='label'>NFT Name</div>
                <div className='sublabel'>What is the collection name</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='Signal Boost' {...register('nftName', { required: true })} />
              {errors.nftName && <div className='text-danger mt-3'>This field is required!</div>}
            </div>
            <div>
              <div className="label-with-sublabel">
                <div className='label'>Project Symbol</div>
                <div className='sublabel'>Similiar to stock ticker</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='SB' {...register('projectSymbol', { required: true })} />
              {errors.projectSymbol && <div className='text-danger mt-3'>This field is required!</div>}
            </div>
          </div>
          <div className="row row-cols-2 mb-4">
            <div>
              <div className="label-with-sublabel">
                <div className='label'>Project Supply</div>
                <div className='sublabel'>How many NFT will be created</div>
              </div>
              <input type="number" className="form-control form-control-grey" placeholder='1111' {...register('projectSupply', { required: true })} />
              {errors.projectSupply && <div className='text-danger mt-3'>This field is required!</div>}
            </div>
            <div>
              <div className="label-with-sublabel">
                <div className='label'>Royalty Percentage</div>
                <div className='sublabel'>This is for secondary sales</div>
              </div>
              <input type="number" className="form-control form-control-grey" placeholder='5' {...register('royaltyPercentage', { required: true })} />
              {errors.royaltyPercentage && <div className='text-danger mt-3'>This field is required!</div>}
            </div>
          </div>
          <div className="mb-4">
            <div className="label-with-sublabel">
              <div className='label'>NFT Description</div>
              <div className='sublabel'>This description for your NFT will appear in the owners wallets.</div>
            </div>
            <textarea className='form-control form-control-grey' rows={4} placeholder='1111SIgnal Boost are spreading on Solana.' {...register('nftDescription', { required: true })}></textarea>
              {errors.nftDescription && <div className='text-danger mt-3'>This field is required!</div>}
          </div>
          <div className="row row-cols-2 mb-4">
            <div>
              <div className="label-with-sublabel">
                <div className='label'>Public Date/Time (UTC)</div>
                <div className='sublabel'>Public sale start time</div>
              </div>
              <Controller
                name='publicDateTime'
                control={control}
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error }
                }) => (
                  <DatePicker
                    selected={value}
                    onChange={value => {
                      console.log('onChange', value);
                      onChange(value);
                    }}
                    showTimeSelect
                    className='form-control form-control-grey'
                    dateFormat={'yyyy/MM/dd HH:mm:ss'}
                    ref={ref}
                    placeholderText='yyyy/MM/dd HH:mm:ss'
                  />
                )}
              />
              {errors.publicDateTime && <div className='text-danger mt-3'>This field is required!</div>}
            </div>
            <div>
              <div className="label-with-sublabel">
                <div className='label'>Public Price</div>
                <div className='sublabel'>Public sale price</div>
              </div>
              <input type="number" className="form-control form-control-grey" placeholder='1.5' {...register('publicPrice', { required: true })} />
              {errors.publicPrice && <div className='text-danger mt-3'>This field is required!</div>}
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-lg-8">
              <div className="label-with-sublabel">
                <div className="label">Primary Sales Address</div>
                <div className="sublabel">This is where proceeds from the mint will go</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='0x3B6Bfd8f885e33e7E75d810DC564e33c79EDFAd7' {...register('primaryAddress', { required: true })} />
              {errors.primaryAddress && <div className='text-danger mt-3'>This field is required!</div>}
            </div>
            <div className="col-lg-4"></div>
          </div>
          <div className="row mb-4">
            <div className="col-lg-8">
              <div className="label-with-sublabel">
                <div className="label">Secondary Address 1</div>
                <div className="sublabel">This is where proceeds from secondary sales will go</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='0x3B6Bfd8f885e33e7E75d810DC564e33c79EDFAd7' {...register('secondaryAddress1')} />
            </div>
            <div className="col-lg-4">
              <div className="label-with-sublabel">
                <div className="label">Secondary Share 1</div>
                <div className="sublabel">Percentage for secondary shareholder</div>
              </div>
              <input type="number" className="form-control form-control-grey" placeholder='30' {...register('secondaryShare1')} />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-lg-8">
              <div className="label-with-sublabel">
                <div className="label">Secondary Address 2 (optional)</div>
                <div className="sublabel">This is where proceeds from secondary sales will go</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='0x3B6Bfd8f885e33e7E75d810DC564e33c79EDFAd7' {...register('secondaryAddress2')} />
            </div>
            <div className="col-lg-4">
              <div className="label-with-sublabel">
                <div className="label">Secondary Share 2 (optional)</div>
                <div className="sublabel">Percentage for secondary shareholder</div>
              </div>
              <input type="number" className="form-control form-control-grey" placeholder='30' {...register('secondaryShare2')} />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-8">
              <div className="label-with-sublabel">
                <div className="label">Secondary Address 3 (optional)</div>
                <div className="sublabel">This is where proceeds from secondary sales will go</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='0x3B6Bfd8f885e33e7E75d810DC564e33c79EDFAd7' {...register('secondaryAddress3')} />
            </div>
            <div className="col-lg-4">
              <div className="label-with-sublabel">
                <div className="label">Secondary Share 3 (optional)</div>
                <div className="sublabel">Percentage for secondary shareholder</div>
              </div>
              <input type="number" className="form-control form-control-grey" placeholder='30' {...register('secondaryShare3')} />
            </div>
          </div>

          {/* form social media */}
          <div className="row row-cols-3 mb-4">
            <div>
              <div className="label-with-sublabel">
                <div className="label">Website</div>
                <div className="sublabel">Link to website</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='http://venatici.io' {...register('website')} />
            </div>
            <div>
              <div className="label-with-sublabel">
                <div className="label">Discord</div>
                <div className="sublabel">Link to discord</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='http://discord.gg/siviw2fasc' {...register('discord')} />
            </div>
            <div>
              <div className="label-with-sublabel">
                <div className="label">Twitter</div>
                <div className="sublabel">Link to twitter</div>
              </div>
              <input type="text" className="form-control form-control-grey" placeholder='http://twitter.com/venatici' {...register('twitter')} />
            </div>
          </div>

          <div className="mb-5">
            <div className="label-with-sublabel">
              <div className="label">Anything we should know?</div>
              <div className="sublabel">Any additional details go here</div>
            </div>
            <textarea className="form-control form-control-grey" rows={4} placeholder="Signal boost not only an Art but messages for the holder."></textarea>
          </div>
          <button className="btn btn-black-gradient px-4">
            <div className="content" onClick={handleSubmit(submit)}>Submit Form</div>
          </button>
        </div>
      )}

      <div>
        <div className='mb-1' style={{ fontSize: '1.5rem' }}>Your mint deployment requests</div>
        <div>You may keep track of all your solana mint deployment requests here, if accepeted you will have option to go to Mint Dashboard.</div>
      </div>
    </>
  )
}
