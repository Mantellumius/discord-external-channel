import { channelActions, selectChannelId } from '@entities/Channel';
import { selectSettings, settingsActions } from '@entities/Settings';
import { selectToken, userActions } from '@entities/User';
import classNames from '@shared/lib/classNames/classNames';
import { ColorPicker, FormInput, WithLabel } from '@shared/ui';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Settings.module.scss';
import Checkbox from '@shared/ui/Checkbox/Checkbox';

export const Settings: FC<Props> = ({ className }) => {
	const channelId = useSelector(selectChannelId);
	const settings = useSelector(selectSettings);
	const token = useSelector(selectToken);
	const dispatch = useDispatch();

	return (
		<div className={classNames(cls.root, {}, [className])}>
			<WithLabel label='Token'>
				<FormInput value={token}
					type='password'
					onChange={(value) => dispatch(userActions.setToken(value))} 
					placeholder='Token'
				/>
			</WithLabel>
			<WithLabel label='Channel Id'>
				<FormInput value={channelId}
					onChange={(value) => dispatch(channelActions.setChannelId(value))} 
					placeholder='Channel id'/>
			</WithLabel>
			<WithLabel label='Messages amount'>
				<FormInput type='number' value={settings.messagesAmount}
					onChange={value => dispatch(settingsActions.setMessagesAmount(Number(value)))}
				/>
			</WithLabel>
			<WithLabel label='Fetch messages interval in ms'>
				<FormInput type='number' value={settings.fetchInterval}
					onChange={value => dispatch(settingsActions.setFetchInterval(Number(value)))}
				/>
			</WithLabel>
			<WithLabel label='Background transperancy'>
				<FormInput type='number'
					value={settings.transperancy.toString()}
					onChange={value => dispatch(settingsActions.setTransperancy(Number(value)))} 
					min={0} max={100} step={1}/>
			</WithLabel>
			<WithLabel label='Background color'>
				<ColorPicker 
					value={settings.backgroundColor}
					onChange={value => dispatch(settingsActions.setColor(value))}
				/>
			</WithLabel>
			<WithLabel label='Show avatar'>
				<Checkbox checked={settings.displayAuthorAvatar} 
					onChange={checked => dispatch(settingsActions.setDisplayAuthorAvatar(checked))}/>
			</WithLabel>
		</div>
	);
};

interface Props {
	className?: string
}
