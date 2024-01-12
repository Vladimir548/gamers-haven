'use client';
import * as Dialog from '@radix-ui/react-dialog';
import style from './style.module.scss';
import Image from 'next/image';
import { FaRegUserCircle } from 'react-icons/fa';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryAvatar } from '@/app/query/query-avatar';
import { SyntheticEvent, useState } from 'react';
import { LuFileUp } from 'react-icons/lu';
import { IoCloseCircleOutline } from 'react-icons/io5';
export default function ModalUploadImage({ avatar }: { avatar: string | undefined }) {
  const { mutate } = useMutation({
    mutationKey: ['add image'],
    mutationFn: (selectedFile: any) => QueryAvatar.addImage(selectedFile),
    onSuccess: () => {},
  });
  const queryClient = useQueryClient();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handlerAddAvatar = async (e: SyntheticEvent) => {
    await queryClient.invalidateQueries({
      queryKey: ['get current user'],
    });
    e.preventDefault();

    if (selectedFile) {
      mutate(selectedFile);
    }
  };
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className="flex  flex-col items-center max-w-full">
          {avatar ? (
            <Image
              unoptimized
              className={'rounded-full object-cover w-[120px] h-[120px] '}
              src={`http://localhost:5000${avatar}`}
              alt={'user image'}
              width={120}
              height={120}
            />
          ) : (
            <div>
              <FaRegUserCircle size={120} />
            </div>
          )}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className=" backdrop-blur  data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow rounded-lg bg-black/60 fixed top-[50%] left-[50%] max-h-[85vh] w-[95vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%]   p-[10px] shadow-[0_0_7px_0_rgba(255,255,255,0.6)] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Upload avatar
          </Dialog.Title>
          <Dialog.Description className=" mt-[10px] flex justify-center items-center mb-2 text-[15px] leading-normal">
            <form className={'max-w-full'}>
              <label htmlFor={'fileInput'}>
                <div className="w-[260px] bg-primary rounded-lg flex justify-center items-center flex-col border-2 border-white border-dashed">
                  <span className={'text-gray-500'}>
                    <LuFileUp size={120} />
                  </span>
                  <span className={'py-2'}>Click to upload image</span>
                </div>
              </label>
              <input
                className={'hidden'}
                id={'fileInput'}
                type="file"
                onChange={handleFileChange}
                accept="image/png, image/jpeg,image/webp"
              />
            </form>
          </Dialog.Description>
          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <button
                onClick={handlerAddAvatar}
                className={
                  'w-full h-[40px] flex mt-3 gap-x-2 justify-center bg-blue-600/50' +
                  ' items-center rounded-lg ease-in-out duration-300  hover:bg-blue-600 '
                }
              >
                Upload
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <IoCloseCircleOutline size={55} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
