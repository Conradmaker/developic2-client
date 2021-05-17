import React, { useState } from 'react';
import useInput from '../../hooks/useInput';
import SquareBtn from '../Button/SquareBtn';
import CustomCheckBox from '../Input/CustomCheckBox';
import CustomInput from '../Input/CustomInput';
import CustomTextarea from '../Input/CustomTextarea';
import TitleLabel from '../Label/TitleLabel';
import { MakeBinderModalMox, ModalLayout } from './styles';
const binderData = [
  { id: 1, title: '1번' },
  { id: 2, title: '2번' },
  { id: 3, title: '3번' },
];
type UsersBinderItemPropsType = {
  binderData: { id: number; title: string };
  selectedBinders: number[];
};
function UsersBinderItem({ binderData, selectedBinders }: UsersBinderItemPropsType) {
  const [checked, setChecked] = useState(
    selectedBinders.findIndex(id => binderData.id === id) !== -1
  );
  const onChange = () => {
    setChecked(!checked);
  };
  return (
    <li>
      <CustomCheckBox title={binderData.title} value={checked} onChange={onChange} />
    </li>
  );
}
type MakeBinderModalPropsType = {
  selectedBinders: number[];
  onClose: (e: React.MouseEvent) => void;
};
export default function MakeBinderModal({
  selectedBinders = [1, 2],
}: MakeBinderModalPropsType): JSX.Element {
  const [newTitle, onChangeNewTitle] = useInput('');
  const [newDesc, onChangeNewDesc] = useInput('');
  return (
    <ModalLayout>
      <MakeBinderModalMox>
        <TitleLabel title="포토바인더 담기" desc="Photo Binder" />
        <div className="double__section">
          <div className="section__left">
            <h5>회원님의 포토바인더</h5>
            <ul>
              {binderData.map(binder => (
                <UsersBinderItem
                  key={binder.id}
                  binderData={binder}
                  selectedBinders={selectedBinders}
                />
              ))}
            </ul>
          </div>
          <div className="section__right">
            <h5>포토바인더 생성</h5>
            <CustomInput title="제목" value={newTitle} onChange={onChangeNewTitle} />
            <CustomTextarea value={newDesc} title="asd" onChange={onChangeNewDesc} />
            <SquareBtn>생성</SquareBtn>
          </div>
        </div>
        <SquareBtn>적용</SquareBtn>
      </MakeBinderModalMox>
    </ModalLayout>
  );
}
