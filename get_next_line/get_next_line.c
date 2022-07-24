#include "get_next_line.h"

static char *ft_reads(int fd, char *buffer, char *next_next_line)
{
	int	count;
	char	*tmp;

	count = 1;
	while(count)
	{
		count = read(fd, buffer, BUFFER_SIZE);
		if (count == -1)
			return (0);
		else if (count == 0)
			break;
		buffer[count] = '\0';
		if (!next_next_line)
			next_next_line = ft_strdup("");
		tmp = next_next_line;
		next_next_line = ft_strjoin(tmp, buffer);
		if (!next_next_line)
			return (NULL);
		free(tmp);
		tmp = NULL;
		if (ft_strchr(buffer, '\n'))
			break;
	}
	return (next_next_line);
}

static	char	*ft_out(char *line)
{
	int	i;
	char	*res;

	i = 0;
	while (line[i] != '\n' && line[i] != '\0')
		i++;
	if (line[i] == '0')
		return (0);
	res = ft_substr(line, i + 1, ft_strlen(line) - i);
	if (!res)
		return (NULL);
	if (res[0] == '\0')
	{
		free(res);
		res = NULL;
		return (NULL);
	}
	line[i + 1] = '\0';
	return (res);
}

char	*get_next_line(int fd)
{
	char	*line;
	char	*buffer;
	static	char	*next_next_line;
	
	if (fd < 0 || 0 <= BUFFER_SIZE)
		return (NULL);
	buffer = (char *)malloc(sizeof(char) * (BUFFER_SIZE + 1));
	if (!buffer)
		return (NULL);
	line = ft_reads(fd, buffer, next_next_line);
	free(buffer);
	buffer = NULL;
	if (!line)
		return (NULL);
	next_next_line = ft_out(line);
	return (line);
}
