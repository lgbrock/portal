import {
	ChonkyActions,
	FileBrowser,
	FileContextMenu,
	FileHelper,
	FileList,
	FileNavbar,
	FileToolbar,
} from 'chonky';
import React, { useCallback, useMemo, useState } from 'react';
import { showActionNotification, useStoryLinks } from '../../utilities/utils';
import DemoFsMap from '../../utilities/demo.fs_map.json';

const rootFolderId = DemoFsMap.rootFolderId;
const fileMap = DemoFsMap.fileMap;

export const useFiles = (currentFolderId) => {
	return useMemo(() => {
		const currentFolder = fileMap[currentFolderId];
		const files = currentFolder.childrenIds
			? currentFolder.childrenIds.map((fileId) => fileMap[fileId] ?? null)
			: [];
		return files;
	}, [currentFolderId]);
};

export const useFolderChain = (currentFolderId) => {
	return useMemo(() => {
		const currentFolder = fileMap[currentFolderId];

		const folderChain = [currentFolder];

		let parentId = currentFolder.parentId;
		while (parentId) {
			const parentFile = fileMap[parentId];
			if (parentFile) {
				folderChain.unshift(parentFile);
				parentId = parentFile.parentId;
			} else {
				parentId = null;
			}
		}

		return folderChain;
	}, [currentFolderId]);
};

export const useFileActionHandler = (setCurrentFolderId) => {
	return useCallback(
		(data) => {
			if (data.id === ChonkyActions.OpenFiles.id) {
				const { targetFile, files } = data.payload;
				const fileToOpen = targetFile ?? files[0];
				if (fileToOpen && FileHelper.isDirectory(fileToOpen)) {
					setCurrentFolderId(fileToOpen.id);
					return;
				}
			}

			showActionNotification(data);
		},
		[setCurrentFolderId]
	);
};

export const ReadOnlyVFSBrowser = (props) => {
	const [currentFolderId, setCurrentFolderId] = useState(rootFolderId);
	const files = useFiles(currentFolderId);
	const folderChain = useFolderChain(currentFolderId);
	const handleFileAction = useFileActionHandler(setCurrentFolderId);
	return (
		<div style={{ height: 400 }}>
			<FileBrowser
				instanceId={props.instanceId}
				files={files}
				folderChain={folderChain}
				onFileAction={handleFileAction}
				thumbnailGenerator={(file) =>
					file.thumbnailUrl ? `https://chonky.io${file.thumbnailUrl}` : null
				}
			>
				<FileNavbar />
				<FileToolbar />
				<FileList />
				<FileContextMenu />
			</FileBrowser>
		</div>
	);
};

const storyName = 'Simple read-only VFS';
export const ReadOnlyVirtualFileSystem = () => {
	return (
		<div className='story-wrapper'>
			<div className='story-description'>
				<h1 className='story-title'>
					{storyName.replace('VFS', 'Virtual File System')}
				</h1>
				<p>
					This example uses the same file map as <em>Advanced mutable VFS</em>,
					except it is running in read-only mode. This means nothing will happen
					when you try to move or delete files.
				</p>
				<p>
					Read-only mode greatly simplifies the code, so it should be easier to
					follow, especially if you're new to Chonky. You can view it using the
					buttons below.
				</p>
				<div className='story-links'>
					{useStoryLinks([
						{ gitPath: '2.x_storybook/src/demos/VFSReadOnly.tsx' },
						{
							name: 'File map JSON',
							gitPath: '2.x_storybook/src/demos/demo.fs_map.json',
						},
					])}
				</div>
			</div>
			<ReadOnlyVFSBrowser instanceId={storyName} />
		</div>
	);
};
ReadOnlyVirtualFileSystem.storyName = storyName;
