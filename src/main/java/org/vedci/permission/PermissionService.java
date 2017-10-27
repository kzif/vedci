package org.vedci.permission;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.vedci.utils.GenericService;
import org.vedci.utils.ResourcePaths;

@RestController
@RequestMapping(path = ResourcePaths.PERMISSION_PATH)
public class PermissionService extends GenericService<PermissionEntity, Long> {

}
