'use client';
import Image from 'next/image';
import { SyntheticEvent, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QueryAvatar } from '@/app/query/query-avatar';
import { FaRegUserCircle } from 'react-icons/fa';
import ModalUploadImage from '@/app/components/modal-upload-image/ModalUploadImage';

interface IUserAvatar {
  avatar: string | undefined;
}
export default function UserAvatar({ avatar }: IUserAvatar) {
  return (
    <div>
      <div className="">
        <ModalUploadImage avatar={avatar} />
      </div>
    </div>
  );
}
