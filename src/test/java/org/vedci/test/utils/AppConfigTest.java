package org.vedci.test.utils;

import org.vedci.utils.AppConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(value = { AppConfig.class })
public class AppConfigTest {

}
