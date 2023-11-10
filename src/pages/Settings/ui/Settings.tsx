import { channelActions, selectChannelId } from '@entities/Channel';
import { selectSettings, settingsActions } from '@entities/Settings';
import { selectToken, userActions } from '@entities/User';
import classNames from '@shared/lib/classNames/classNames';
import { Checkbox, ColorPicker, FormInput, H, Range, Text, WithLabel } from '@shared/ui';
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cls from './Settings.module.scss';

export const Settings: FC<Props> = ({ className }) => {
	const channelId = useSelector(selectChannelId);
	const settings = useSelector(selectSettings);
	const token = useSelector(selectToken);
	const dispatch = useDispatch();

	return (
		<div className={classNames(cls.root, {}, [className])}>
			<H size={2} variant='primary' className={cls.root__header}>
				General
			</H>
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
			<WithLabel label='Amount of messages'>
				<FormInput type='number' value={settings.messagesAmount}
					onChange={value => dispatch(settingsActions.setMessagesAmount(Number(value)))}
				/>
			</WithLabel>
			<WithLabel label='Fetch interval in ms'>
				<FormInput type='number' value={settings.fetchInterval}
					onChange={value => dispatch(settingsActions.setFetchInterval(Number(value)))}
					min={100}
				/>
			</WithLabel>
			<H size={2} variant='primary' className={cls.root__header}>
				Appearence
			</H>
			<WithLabel label='Background color'>
				<ColorPicker 
					value={settings.backgroundColor}
					onChange={value => dispatch(settingsActions.setBackgroundColor(value))}
				/>
				<Text variant='outline' fontType='monospace'>
					{settings.backgroundColor}
				</Text>
			</WithLabel>
			<WithLabel label='Background opacity'>
				<Range value={settings.backgroundOpacity}
					onChange={value => dispatch(settingsActions.setBackgroundTransperancy(Number(value)))} 
					min={0} max={100}/>
			</WithLabel>
			<WithLabel label='Text color'>
				<ColorPicker 
					value={settings.textColor}
					onChange={value => dispatch(settingsActions.setTextColor(value))}
				/>
				<Text variant='outline' fontType='monospace'>
					{settings.textColor}
				</Text>
			</WithLabel>
			<WithLabel label='Text opacity'>
				<Range value={settings.textColorOpacity}
					onChange={value => dispatch(settingsActions.setTextColorTransperancy(Number(value)))} 
					min={0} max={100}
				/>
			</WithLabel>
			<WithLabel label='Show avatar'>
				<Checkbox checked={settings.displayAuthorAvatar} 
					onChange={checked => dispatch(settingsActions.setDisplayAuthorAvatar(checked))}/>
			</WithLabel>
			<H size={2} variant='primary' className={cls.root__header}>
				Other
			</H>
			<WithLabel label='Minimize to tray'>
				<Checkbox checked={settings.minimizeToTray}
					onChange={checked => dispatch(settingsActions.setMinimizeToTray(checked))} 
				/>
			</WithLabel>
		</div>
	);
};

interface Props {
	className?: string
}
