Object.defineProperty($aero, "storagePrefix", {
	get: () => `${$aero.proxyLocation.origin}_`,
});

$aero.storageNomenclature = {
	apply(_target, _that, args) {
		const [key] = args;

		args[0] = $aero.storagePrefix + key;

		return Reflect.apply(...arguments);
	},
};

$aero.storageKey = key => {
	const prefixSplit = key.split($aero.storagePrefix);

	if (prefixSplit[0] === $aero.storagePrefix) return prefixSplit.slice(1);
	else return null;
};

$aero.storageKeys = keys => {
	let proxyKeys = [];

	for (let key of keys) {
		const prefixSplit = key.split($aero.storagePrefix);

		if (prefixSplit[0] === $aero.storagePrefix)
			proxyKeys.append(prefixSplit.slice(1));
	}

	return proxyKeys;
};
